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
    using Instrument = AutoPartsStoreBackend.Models.ViewModels.RelatedProducts.Instrument;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class InstrumentsController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public InstrumentsController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/Instruments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Instrument>>> GetInstruments()
        {
            return await this.db.Instruments.ToListAsync();
        }

        // GET: api/Instruments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Instrument>> GetInstrument(int id)
        {
            var instrument = await this.db.Instruments.FindAsync(id);

            if (instrument == null)
                return NotFound();

            return instrument;
        }

        // PUT: api/Instruments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInstrument(int id, Instrument instrument)
        {
            if (id != instrument.Id)
                return BadRequest();

            this.db.Entry(instrument).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InstrumentExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/Instruments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Instrument>> PostInstrument(Instrument instrument)
        {
            this.db.Instruments.Add(instrument);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetInstrument", new { id = instrument.Id }, instrument);
        }

        // DELETE: api/Instruments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Instrument>> DeleteInstrument(int id)
        {
            var instrument = await this.db.Instruments.FindAsync(id);
            if (instrument == null)
                return NotFound();

            this.db.Instruments.Remove(instrument);
            await this.db.SaveChangesAsync();

            return instrument;
        }

        private bool InstrumentExists(int id)
        {
            return this.db.Instruments.Any(e => e.Id == id);
        }
    }
}