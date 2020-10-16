using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoPartsStoreBackend.Models.AppSystem;
using AutoPartsStoreBackend.Models.Entities.Account;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace AutoPartsStoreBackend.Controllers.Account
{
    using System.Security.Claims;
    using AutoPartsStoreBackend.Models.ViewModels.Account;

    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationContext db;

        public AccountController(ApplicationContext context)
        {
            this.db = context;
        }

        // GET: api/Account
        [HttpGet]
        public IActionResult Login()
        {
            return Ok();
        }
        
        // POST: api/Account
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
                if (user != null)
                {
                    await Authenticate(model.Email); // аутентификация
 
                    return Ok();
                }
                ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }
            return BadRequest(model);
        }

        // GET: api/Account
        [HttpGet]
        public IActionResult Register()
        {
            return Ok();
        }

        // POST: api/Account
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
                if (user == null)
                {
                    // добавляем пользователя в бд
                    db.Users.Add(new User { Email = model.Email, Password = model.Password });
                    await db.SaveChangesAsync();
 
                    await Authenticate(model.Email); // аутентификация
 
                    return Ok();
                }
                else
                    ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }
            return BadRequest(model);
        }
 
        private async Task Authenticate(string userName)
        {
            var claims = new List<Claim>
                         {
                                 new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
                         };
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }
 
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Login", "Account");
        }
    }
}
