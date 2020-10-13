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
    using CarOil = AutoPartsStoreBackend.Models.ViewModels.RelatedProducts.CarOil;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class CarOilsController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public CarOilsController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/CarOils
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarOil>>> GetCarOils()
        {
            return await this.db.CarOils.ToListAsync();
        }

        // GET: api/CarOils/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarOil>> GetCarOil(int id)
        {
            var carOil = await this.db.CarOils.FindAsync(id);

            if (carOil == null)
                return NotFound();

            return carOil;
        }

        // PUT: api/CarOils/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarOil(int id, CarOil carOil)
        {
            if (id != carOil.Id)
                return BadRequest();

            this.db.Entry(carOil).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarOilExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/CarOils
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CarOil>> PostCarOil(CarOil carOil)
        {
            this.db.CarOils.Add(carOil);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetCarOil", new { id = carOil.Id }, carOil);
        }

        // DELETE: api/CarOils/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CarOil>> DeleteCarOil(int id)
        {
            var carOil = await this.db.CarOils.FindAsync(id);
            if (carOil == null)
                return NotFound();

            this.db.CarOils.Remove(carOil);
            await this.db.SaveChangesAsync();

            return carOil;
        }

        private bool CarOilExists(int id)
        {
            return this.db.CarOils.Any(e => e.Id == id);
        }
    }
}