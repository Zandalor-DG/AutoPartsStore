namespace AutoPartsStoreBackend.Controllers.AutoPartsCatalog
{
    #region << Using >>

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AutoPartsStoreBackend.Models.AppSystem;
    using AutoPartsStoreBackend.Models.Entities.AutopartsCatalog;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
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

        // GET: api/AutoParts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AutoPart>>> GetAutoParts()
        {
            return await this.db.AutoParts.ToListAsync();
        }

        // GET: api/AutoParts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AutoPart>> GetAutoPart(int id)
        {
            var autoPart = await this.db.AutoParts.FindAsync(id);

            if (autoPart == null)
                return NotFound();

            return autoPart;
        }

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
        [HttpPost]
        public async Task<ActionResult<AutoPart>> PostAutoPart(AutoPart autoPart)
        {
            this.db.AutoParts.Add(autoPart);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetAutoPart", new { id = autoPart.Id }, autoPart);
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