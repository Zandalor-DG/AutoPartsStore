namespace AutoPartsStoreBackend.Controllers.AutoPartsCatalog
{
    #region << Using >>

    using System.Linq;
    using System.Threading.Tasks;
    using AutoPartsStoreBackend.Models.AppSystem;
    using AutoPartsStoreBackend.Models.Entities.AutopartsCatalog;
    using AutoPartsStoreBackend.Models.ViewModels.AutopartsCatalog;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ModelCarsController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public ModelCarsController(ApplicationContext db)
        {
            this.db = db;
        }

        #endregion

        // GET: api/ModelCars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModelCar>> GetModelCar(int id)
        {
            var modelCar = await this.db.ModelCars.Include(a => a.AutoParts)
                                     .SingleOrDefaultAsync(b => b.Id == id);

            if (modelCar == null)
                return NotFound();

            var autoPartsVM = modelCar.AutoParts.Select(a => new AutoPartVM()
                                                             {
                                                                     Id = a.Id,
                                                                     Name = a.Name,
                                                                     Model = a.ModelCar.Model
                                                             }).ToList();

            return Ok(autoPartsVM);
        }

        // PUT: api/ModelCars/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModelCar(int id, ModelCar modelCar)
        {
            if (id != modelCar.Id)
                return BadRequest();

            this.db.Entry(modelCar).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await ModelCarExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/ModelCars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{id}")]
        public async Task<ActionResult<ModelCar>> PostModelCar(int id, ModelCarVM modelCarVM)
        {
            if (modelCarVM == null)
                return NotFound();

            var modelCar = await this.db.ManufacturerCars.Include(a => a.ModelCars)
                                     .SingleOrDefaultAsync(b => b.Id == id);

            modelCar.ModelCars.Add(new ModelCar()
                                   {
                                           Model = modelCarVM.Model,
                                           ManufacturerCar = modelCar,
                                   });

            this.db.Update(modelCar);
            await this.db.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/ModelCars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ModelCar>> DeleteModelCar(int id)
        {
            var modelCar = await this.db.ModelCars.FindAsync(id);
            if (modelCar == null)
                return NotFound();

            foreach (var autoParts in modelCar.AutoParts)
                this.db.AutoParts.Remove(autoParts);

            this.db.ModelCars.Remove(modelCar);
            await this.db.SaveChangesAsync();

            return modelCar;
        }

        async Task<bool> ModelCarExists(int id)
        {
            return await this.db.ModelCars.AnyAsync(r => r.Id == id);
        }
    }
}