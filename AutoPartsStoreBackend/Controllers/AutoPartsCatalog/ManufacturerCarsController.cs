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
                                                                                                                                            Model = b.Model
                                                                                                                                    }).ToList()
                                                                     }).ToList();

            return Ok(manufacturerCarsVM);
            //return await this.db.ManufacturerCars.ToListAsync();
        }

        // GET: api/ManufacturerCars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ManufacturerCar>> GetManufacturerCar(int id)
        {
            var manufacturerCar = await this.db.ManufacturerCars.Include(manufacturerCar => manufacturerCar.ModelCars)
                                            .SingleOrDefaultAsync(manufacturerCar => manufacturerCar.Id == id);

            if (manufacturerCar == null)
                return NotFound();

            var modelCarVM = manufacturerCar.ModelCars.Select(modelCar => new ModelCarVM()
                                                                          {
                                                                                  Id = modelCar.Id,
                                                                                  Model = modelCar.Model,
                                                                                  Manufacturer = modelCar.ManufacturerCar.Manufacturer
                                                                          }).ToList();

            return Ok(modelCarVM);
            // return manufacturerCar;
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

            return NoContent();
        }

        // POST: api/ManufacturerCars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ManufacturerCar>> PostManufacturerCar([FromBody] /*string manufacturer*/ ManufacturerCar manufacturerCar)
        {
            /*if (manufacturer == null)
                return NotFound();

            var manufacturername = manufacturer.ToString();

            var manufacturerCar = new ManufacturerCar()
                                  {
                                          Manufacturer = manufacturername
                                  };

            this.db.Add(manufacturerCar);
            await this.db.SaveChangesAsync();

            return Ok();*/
            this.db.ManufacturerCars.Add(manufacturerCar);
             await this.db.SaveChangesAsync();
            
             return CreatedAtAction("GetManufacturerCar", new { id = manufacturerCar.Id }, manufacturerCar);
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
                {
                    this.db.AutoParts.Remove(autoParts);
                }
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

/*
// GET: api/<TodoListController>
        [HttpGet] 
public async Task<IActionResult> Get()
        {
            var todoList = await this.db.TodoLists.Include(a => a.Items).ToListAsync();
            var todoListVM = todoList.Select(a =>
                                                     new TodoListVM()
                                                     {
                                                             Id = a.Id,
                                                             Name = a.Name,
                                                             CountAllItems = a.Items.Count,
                                                             CompletedItemsCount = a.Items.Count(b => b.Completed)
                                                     }).ToList();

            return Ok(todoListVM);
        }
        
        [HttpGet ("{id}")]
        // GET api/<TodoListController>/5
        public async Task<IActionResult> Get(int id,  [FromQuery]string search, [FromQuery]bool undone)
        {
            var todoList = await this.db.TodoLists.Include(a => a.Items)
                                     .SingleOrDefaultAsync(a => a.Id == id);

            if (todoList == null)
                return NotFound();

            var todoItemVM = todoList.Items.Where(item => (string.IsNullOrWhiteSpace(search) ||
                                                           item.Name.ToLower()
                                                               .Contains(search
                                                                                 .ToLower())) && (!undone || !item.Completed))
                                     .Select(a => new TodoItemVM()
                                                  {
                                                          Id = a.Id,
                                                          Name = a.Name,
                                                          CompletedTask = a.Completed,
                                                          CreateDate = a.CreateDate
                                                  }).ToList();

            var todoListVM = new TodoListVM()
                             {
                                     Id = todoList.Id,
                                     Name = todoList.Name,
                                     Items = todoItemVM
                             };

            return Ok(todoListVM);
        }

        // POST api/<TodoListController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string name)
        {
            if (name == null)
                return NotFound();

            var todoList = new TodoList()
                           {
                                   Name = name
                           };

            this.db.Add(todoList);
            await this.db.SaveChangesAsync();

            return Ok();
        }
    }*/

/*
   [HttpPost]
        public async Task<IActionResult> Post([FromBody] TodoItemPost model)
        {
            var todoList = await this.db.TodoLists.Include(a => a.Items)
                                     .SingleOrDefaultAsync(a => a.Id == int.Parse(model.TodoListId));
            if (model.Name == null)
            {
                return NotFound();
            }
            else
            {
                todoList.Items.Add(new TodoItem()
                                        {
                                            Name = model.Name,
                                            Completed = false,
                                            ToDoList = todoList
                                        });

                this.db.Update(todoList);
            }

            await this.db.SaveChangesAsync();

            return Ok();
        }

        // PUT api/<TodoItemController>/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] TodoItemPut model)
        {
            var updateTodoItem = await this.db.TodoItems.SingleOrDefaultAsync(a => a.Id == model.itemId);
            if (updateTodoItem == null)
                return NotFound();

            updateTodoItem.Completed = true;
            this.db.Update(updateTodoItem);
            await this.db.SaveChangesAsync();

            return Ok();
        }
    }
 */