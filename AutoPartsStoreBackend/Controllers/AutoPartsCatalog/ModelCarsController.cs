using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoPartsStoreBackend.Models.AppSystem;
using AutoPartsStoreBackend.Models.Entities.AutopartsCatalog;

namespace AutoPartsStoreBackend.Controllers.AutoPartsCatalog
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModelCarsController : ControllerBase
    {
        private readonly ApplicationContext db;

        public ModelCarsController(ApplicationContext context)
        {
            this.db = context;
        }

        // GET: api/ModelCars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ModelCar>>> GetModelCars()
        {
            return await this.db.ModelCars.ToListAsync();
        }

        // GET: api/ModelCars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModelCar>> GetModelCar(int id)
        {
            var modelCar = await this.db.ModelCars.FindAsync(id);

            if (modelCar == null)
            {
                return NotFound();
            }

            return modelCar;
        }

        // PUT: api/ModelCars/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModelCar(int id, ModelCar modelCar)
        {
            if (id != modelCar.Id)
            {
                return BadRequest();
            }

            this.db.Entry(modelCar).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModelCarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ModelCars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ModelCar>> PostModelCar(ModelCar modelCar)
        {
            this.db.ModelCars.Add(modelCar);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetModelCar", new { id = modelCar.Id }, modelCar);
        }

        // DELETE: api/ModelCars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ModelCar>> DeleteModelCar(int id)
        {
            var modelCar = await this.db.ModelCars.FindAsync(id);
            if (modelCar == null)
            {
                return NotFound();
            }

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
