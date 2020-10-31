namespace AutoPartsStoreBackend.Controllers.AutoPartsCatalog
{
    #region << Using >>

    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AutoPartsStoreBackend.Models.AppSystem;
    using AutoPartsStoreBackend.Models.Entities.AutopartsCatalog;
    using AutoPartsStoreBackend.Models.ViewModels.AutopartsCatalog;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class ManufacturerCarsController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public ManufacturerCarsController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/ManufacturerCars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ManufacturerCar>>> GetManufacturerCars()
        {
            var manufacturerCars = await this.db.ManufacturerCars.Include(manufacturerCar => manufacturerCar.ModelCars).ToListAsync();

            if (manufacturerCars == null)
                return NotFound();

            var manufacturerCarsVM = manufacturerCars.Select(manufacturerCar =>
                                                                     new ManufacturerCarVM()
                                                                     {
                                                                             Id = manufacturerCar.Id,
                                                                             Manufacturer = manufacturerCar.Manufacturer,
                                                                             ModelCarsVM = manufacturerCar.ModelCars.Select(b =>
                                                                                                                                    new ModelCarVM()
                                                                                                                                    {
                                                                                                                                            Id = b.Id,
                                                                                                                                            Model = b.Model,
                                                                                                                                            Manufacturer = manufacturerCar.Manufacturer
                                                                                                                                    }).ToList()
                                                                     }).ToList();

            return Ok(manufacturerCarsVM);
        }

        // GET: api/ManufacturerCars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ManufacturerCar>> GetManufacturerCar(int id)
        {
            var manufacturerCar = await this.db.ManufacturerCars.Include(car => car.ModelCars)
                                            .SingleOrDefaultAsync(car => car.Id == id);

            if (manufacturerCar == null)
                return NotFound();

            var modelCarVM = manufacturerCar.ModelCars.Select(modelCar => new ModelCarVM()
                                                                          {
                                                                                  Id = modelCar.Id,
                                                                                  Model = modelCar.Model,
                                                                                  Manufacturer = modelCar.ManufacturerCar.Manufacturer
                                                                          }).ToList();

            return Ok(modelCarVM);
        }

        // PUT: api/ManufacturerCars/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutManufacturerCar(int id, ManufacturerCar manufacturerCar)
        {
            if (id != manufacturerCar.Id)
                return BadRequest();

            this.db.Entry(manufacturerCar).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ManufacturerCarExists(id))
                    return NotFound();
                else
                    throw;
            }

            return Ok();
        }

        // POST: api/ManufacturerCars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ManufacturerCar>> PostManufacturerCar([FromBody] ManufacturerCarVM manufacturerCarVM)
        {
            if (manufacturerCarVM == null)
                return NotFound();

            var manufacturerCars = new ManufacturerCar()
                                   {
                                           Manufacturer = manufacturerCarVM.Manufacturer
                                   };

            this.db.Add(manufacturerCars);
            await this.db.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/ManufacturerCars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ManufacturerCar>> DeleteManufacturerCar(int id)
        {
            var manufacturerCar = await this.db.ManufacturerCars.FindAsync(id);
            if (manufacturerCar == null)
                return NotFound();

            foreach (var modelCar in manufacturerCar.ModelCars)
            {
                foreach (var autoParts in modelCar.AutoParts)
                    this.db.AutoParts.Remove(autoParts);

                this.db.ModelCars.Remove(modelCar);
            }

            this.db.ManufacturerCars.Remove(manufacturerCar);
            await this.db.SaveChangesAsync();

            return Ok();
        }

        private bool ManufacturerCarExists(int id)
        {
            return this.db.ManufacturerCars.Any(e => e.Id == id);
        }
    }
}