namespace AutoPartsStoreBackend.Controllers.AutoPartsCatalog
{
    #region << Using >>

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
    public class ModelCarsController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public ModelCarsController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/ModelCars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModelCar>> GetModelCar(int id)
        {
            var modelCar = await this.db.ModelCars.Include(car => car.AutoParts)
                                     .SingleOrDefaultAsync(car => car.Id == id);

            if (modelCar == null)
                return NotFound();

            var autoPartsVM = modelCar.AutoParts.Select(modelCar => new AutoPartVM()
                                                                    {
                                                                            Id = modelCar.Id,
                                                                            Name = modelCar.Name,
                                                                            ModelCarVM = modelCar.ModelCar.Model
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
                if (!ModelCarExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/ModelCars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ModelCar>> PostModelCar(ModelCarVM modelCarVM)
        {
            if (modelCarVM == null)
                return NotFound();

            var modelCar = new ModelCar()
                           {
                                   Model = modelCarVM.Model.ToString()
                           };

            this.db.Add(modelCar);
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

        private bool ModelCarExists(int id)
        {
            return this.db.ModelCars.Any(e => e.Id == id);
        }
    }
}