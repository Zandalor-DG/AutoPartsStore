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
    using ElectricalEquipment = AutoPartsStoreBackend.Models.ViewModels.RelatedProducts.ElectricalEquipment;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class ElectricalEquipmentsController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public ElectricalEquipmentsController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/ElectricalEquipments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ElectricalEquipment>>> GetElectricalEquipments()
        {
            return await this.db.ElectricalEquipments.ToListAsync();
        }

        // GET: api/ElectricalEquipments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ElectricalEquipment>> GetElectricalEquipment(int id)
        {
            var electricalEquipment = await this.db.ElectricalEquipments.FindAsync(id);

            if (electricalEquipment == null)
                return NotFound();

            return electricalEquipment;
        }

        // PUT: api/ElectricalEquipments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutElectricalEquipment(int id, ElectricalEquipment electricalEquipment)
        {
            if (id != electricalEquipment.Id)
                return BadRequest();

            this.db.Entry(electricalEquipment).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ElectricalEquipmentExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/ElectricalEquipments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ElectricalEquipment>> PostElectricalEquipment(ElectricalEquipment electricalEquipment)
        {
            this.db.ElectricalEquipments.Add(electricalEquipment);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetElectricalEquipment", new { id = electricalEquipment.Id }, electricalEquipment);
        }

        // DELETE: api/ElectricalEquipments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ElectricalEquipment>> DeleteElectricalEquipment(int id)
        {
            var electricalEquipment = await this.db.ElectricalEquipments.FindAsync(id);
            if (electricalEquipment == null)
                return NotFound();

            this.db.ElectricalEquipments.Remove(electricalEquipment);
            await this.db.SaveChangesAsync();

            return electricalEquipment;
        }

        private bool ElectricalEquipmentExists(int id)
        {
            return this.db.ElectricalEquipments.Any(e => e.Id == id);
        }
    }
}