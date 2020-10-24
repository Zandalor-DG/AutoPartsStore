namespace AutoPartsStoreBackend.Models.AppSystem
{
    #region << Using >>

    using System;
    using AutoPartsStoreBackend.Models.Entities.Account;
    using AutoPartsStoreBackend.Models.Entities.AutopartsCatalog;
    using AutoPartsStoreBackend.Models.ViewModels.RelatedProducts;
    using Microsoft.EntityFrameworkCore;

    #endregion

    public sealed class ApplicationContext : DbContext
    {
        #region Constants

        public const string AdminRoleName = "admin";

        public const string СlientRoleName = "client";

        #endregion

        #region Properties

        public DbSet<User> Users { get; set; }

        public DbSet<ModelCar> ModelCars { get; set; }

        public DbSet<AutoPart> AutoParts { get; set; }

        public DbSet<ManufacturerCar> ManufacturerCars { get; set; }

        public DbSet<Autochemistry> Autochemistries { get; set; }

        public DbSet<CarOil> CarOils { get; set; }

        public DbSet<Disk> Disks { get; set; }

        public DbSet<ElectricalEquipment> ElectricalEquipments { get; set; }

        public DbSet<GlassSweeperBrush> GlassSweeperBrushes { get; set; }

        public DbSet<Instrument> Instruments { get; set; }

        public DbSet<Tire> Tires { get; set; }

        public DbSet<Role> Roles { get; set; }

        #endregion

        #region Constructors

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
                : base(options)
        {
            Database.EnsureCreated();
        }

        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var adminEmail = "admin@mail.ru";
            var adminPassword = "123456";

            var adminRole = new Role { Id = 1, Name = AdminRoleName };
            var clientRole = new Role { Id = 2, Name = СlientRoleName };
            var adminUser = new { Id = 1, Email = adminEmail, Password = adminPassword, RoleId = adminRole.Id, Budget = 0m, CrDt = DateTime.UtcNow };

            modelBuilder.Entity<Role>().HasData(new Role[] { adminRole, clientRole });
            modelBuilder.Entity<User>().HasData(new object[] { adminUser });
            base.OnModelCreating(modelBuilder);
        }
    }
}