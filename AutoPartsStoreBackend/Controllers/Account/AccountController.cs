namespace AutoPartsStoreBackend.Controllers.Account
{
    #region << Using >>

    using System.Collections.Generic;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using AutoPartsStoreBackend.Models.AppSystem;
    using AutoPartsStoreBackend.Models.Entities.Account;
    using AutoPartsStoreBackend.Models.ViewModels.Account;
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    #endregion

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        #region Properties

        private readonly ApplicationContext db;

        #endregion

        #region Constructors

        public AccountController(ApplicationContext context)
        {
            this.db = context;
        }

        #endregion

        // POST: api/Account
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(model);

            var buyer = await this.db.Users
                                  .Include(u => u.Role)
                                  .FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);

            if (buyer != null)
            {
                await Authenticate(buyer);

                return Ok();
            }

            ModelState.AddModelError("", "Некорректные логин и(или) пароль");

            return BadRequest(model);
        }

        // POST: api/Account
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(model);

            var user = await this.db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user == null)
            {
                // добавляем пользователя в бд
                user = new User { Email = model.Email, Password = model.Password };
                var userRole = await this.db.Roles.FirstOrDefaultAsync(r => r.Name == "client");
                if (userRole != null)
                    user.Role = userRole;

                this.db.Users.Add(user);
                await this.db.SaveChangesAsync();

                await Authenticate(user); // аутентификация

                return Ok();
            }
            else
            {
                ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }

            return BadRequest(model);
        }

        private async Task Authenticate(User user)
        {
            var claims = new List<Claim>
                         {
                                 new Claim(ClaimsIdentity.DefaultNameClaimType, user.Id.ToString()),
                                 new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role?.Name)
                         };

            var id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType,
                                        ClaimsIdentity.DefaultRoleClaimType);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }

        public async Task<IActionResult> LogOut()
        {
            await HttpContext.SignOutAsync();
            return SignOut();
        }
    }
}