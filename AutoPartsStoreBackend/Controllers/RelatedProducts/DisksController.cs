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
    using Disk = AutoPartsStoreBackend.Models.ViewModels.RelatedProducts.Disk;

    #endregion

    [Route("api/[controller]")]
    [ApiController]
    public class DisksController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public DisksController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // GET: api/Disks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Disk>>> GetDisks()
        {
            return await this.db.Disks.ToListAsync();
        }

        // GET: api/Disks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Disk>> GetDisk(int id)
        {
            var disk = await this.db.Disks.FindAsync(id);

            if (disk == null)
                return NotFound();

            return disk;
        }

        // PUT: api/Disks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDisk(int id, Disk disk)
        {
            if (id != disk.Id)
                return BadRequest();

            this.db.Entry(disk).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DiskExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // POST: api/Disks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Disk>> PostDisk(Disk disk)
        {
            this.db.Disks.Add(disk);
            await this.db.SaveChangesAsync();

            return CreatedAtAction("GetDisk", new { id = disk.Id }, disk);
        }

        // DELETE: api/Disks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Disk>> DeleteDisk(int id)
        {
            var disk = await this.db.Disks.FindAsync(id);
            if (disk == null)
                return NotFound();

            this.db.Disks.Remove(disk);
            await this.db.SaveChangesAsync();

            return disk;
        }

        private bool DiskExists(int id)
        {
            return this.db.Disks.Any(e => e.Id == id);
        }
    }
}