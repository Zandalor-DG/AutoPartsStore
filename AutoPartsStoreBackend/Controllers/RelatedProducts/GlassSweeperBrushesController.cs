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
    using GlassSweeperBrush = AutoPartsStoreBackend.Models.ViewModels.RelatedProducts.GlassSweeperBrush;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class GlassSweeperBrushesController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public GlassSweeperBrushesController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/GlassSweeperBrushes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GlassSweeperBrush>>> GetGlassSweeperBrushes()
        {
            return await this.db.GlassSweeperBrushes.ToListAsync();
        }

        // GET: api/GlassSweeperBrushes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GlassSweeperBrush>> GetGlassSweeperBrush(int id)
        {
            var glassSweeperBrush = await this.db.GlassSweeperBrushes.FindAsync(id);

            if (glassSweeperBrush == null)
                return NotFound();

            return glassSweeperBrush;
        }

        // PUT: api/GlassSweeperBrushes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGlassSweeperBrush(int id, GlassSweeperBrush glassSweeperBrush)
        {
            if (id != glassSweeperBrush.Id)
                return BadRequest();

            this.db.Entry(glassSweeperBrush).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GlassSweeperBrushExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/GlassSweeperBrushes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<GlassSweeperBrush>> PostGlassSweeperBrush(GlassSweeperBrush glassSweeperBrush)
        {
            this.db.GlassSweeperBrushes.Add(glassSweeperBrush);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetGlassSweeperBrush", new { id = glassSweeperBrush.Id }, glassSweeperBrush);
        }

        // DELETE: api/GlassSweeperBrushes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GlassSweeperBrush>> DeleteGlassSweeperBrush(int id)
        {
            var glassSweeperBrush = await this.db.GlassSweeperBrushes.FindAsync(id);
            if (glassSweeperBrush == null)
                return NotFound();

            this.db.GlassSweeperBrushes.Remove(glassSweeperBrush);
            await this.db.SaveChangesAsync();

            return glassSweeperBrush;
        }

        private bool GlassSweeperBrushExists(int id)
        {
            return this.db.GlassSweeperBrushes.Any(e => e.Id == id);
        }
    }
}