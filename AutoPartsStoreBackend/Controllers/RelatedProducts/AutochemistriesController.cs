namespace AutoPartsStoreBackend.Controllers.RelatedProducts
{
    #region << Using >>

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AutoPartsStoreBackend.Models.AppSystem;
    using AutoPartsStoreBackend.Models.Entities.RelatedProducts;
    using AutoPartsStoreBackend.Models.ViewModels.RelatedProducts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Autochemistry = AutoPartsStoreBackend.Models.ViewModels.RelatedProducts.Autochemistry;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class AutochemistriesController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public AutochemistriesController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/Autochemistries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Autochemistry>>> GetAutochemistries()
        {
            return await this.db.Autochemistries.ToListAsync();
        }

        // GET: api/Autochemistries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Autochemistry>> GetAutochemistry(int id)
        {
            var autochemistry = await this.db.Autochemistries.FindAsync(id);

            if (autochemistry == null)
                return NotFound();

            return autochemistry;
        }

        // PUT: api/Autochemistries/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAutochemistry(int id, Autochemistry autochemistry)
        {
            if (id != autochemistry.Id)
                return BadRequest();

            this.db.Entry(autochemistry).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AutochemistryExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/Autochemistries
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Autochemistry>> PostAutochemistry(Autochemistry autochemistry)
        {
            this.db.Autochemistries.Add(autochemistry);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetAutochemistry", new { id = autochemistry.Id }, autochemistry);
        }

        // DELETE: api/Autochemistries/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Autochemistry>> DeleteAutochemistry(int id)
        {
            var autochemistry = await this.db.Autochemistries.FindAsync(id);
            if (autochemistry == null)
                return NotFound();

            this.db.Autochemistries.Remove(autochemistry);
            await this.db.SaveChangesAsync();

            return autochemistry;
        }

        private bool AutochemistryExists(int id)
        {
            return this.db.Autochemistries.Any(e => e.Id == id);
        }
    }
}