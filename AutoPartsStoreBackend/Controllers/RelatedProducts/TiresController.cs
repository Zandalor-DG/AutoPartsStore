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
    using Tire = AutoPartsStoreBackend.Models.ViewModels.RelatedProducts.Tire;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class TiresController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public TiresController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/Tires
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tire>>> GetTires()
        {
            return await this.db.Tires.ToListAsync();
        }

        // GET: api/Tires/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tire>> GetTire(int id)
        {
            var tire = await this.db.Tires.FindAsync(id);

            if (tire == null)
                return NotFound();

            return tire;
        }

        // PUT: api/Tires/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTire(int id, Tire tire)
        {
            if (id != tire.Id)
                return BadRequest();

            this.db.Entry(tire).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TireExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/Tires
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tire>> PostTire(Tire tire)
        {
            this.db.Tires.Add(tire);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetTire", new { id = tire.Id }, tire);
        }

        // DELETE: api/Tires/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tire>> DeleteTire(int id)
        {
            var tire = await this.db.Tires.FindAsync(id);
            if (tire == null)
                return NotFound();

            this.db.Tires.Remove(tire);
            await this.db.SaveChangesAsync();

            return tire;
        }

        private bool TireExists(int id)
        {
            return this.db.Tires.Any(e => e.Id == id);
        }
    }
}