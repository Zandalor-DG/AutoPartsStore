namespace AutoPartsStoreBackend.Controllers.AutoPartsCatalog
{
    #region << Using >>

    using System.Linq;
    using System.Threading.Tasks;
    using AutoPartsStoreBackend.Models.AppSystem;
    using AutoPartsStoreBackend.Models.Entities.AutopartsCatalog;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AutoPartsController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public AutoPartsController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // PUT: api/AutoParts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAutoPart(int id, AutoPart autoPart)
        {
            if (id != autoPart.Id)
                return BadRequest();

            this.db.Entry(autoPart).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AutoPartExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/AutoParts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{id}")]
        public async Task<ActionResult<AutoPart>> PostAutoPart(int id, AutoPart autoPartVM)
        {
            if (autoPartVM == null)
                return NotFound();

            var autoParts = await this.db.ModelCars.Include(a => a.AutoParts)
                                      .SingleOrDefaultAsync(b => b.Id == id);

            autoParts.AutoParts.Add(new AutoPart()
                                    {
                                            Name = autoPartVM.Name,
                                            ModelCar = autoParts
                                    });

            this.db.Update(autoParts);
            await this.db.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/AutoParts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AutoPart>> DeleteAutoPart(int id)
        {
            var autoPart = await this.db.AutoParts.FindAsync(id);
            if (autoPart == null)
                return NotFound();

            this.db.AutoParts.Remove(autoPart);
            await this.db.SaveChangesAsync();

            return autoPart;
        }

        private bool AutoPartExists(int id)
        {
            return this.db.AutoParts.Any(e => e.Id == id);
        }
    }
}