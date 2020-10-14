namespace AutoPartsStoreBackend.Models.AppSystem
{
    #region << Using >>

    using AutoPartsStoreBackend.Models.Entities.AutopartsCatalog;
    using AutoPartsStoreBackend.Models.Entities.RelatedProducts;
    using Microsoft.EntityFrameworkCore;

    #endregion

    public sealed class ApplicationContext : DbContext
    {
        #region Properties

        public DbSet<ModelCar> ModelCars { get; set; }

        public DbSet<AutoPart> AutoParts { get; set; }

        public DbSet<ManufacturerCar> ManufacturerCars { get; set; }

        public DbSet<Autochemistry> AutoChemistries { get; set; }

        public DbSet<CarOil> CarOils { get; set; }

        public DbSet<Disk> Disks { get; set; }

        public DbSet<ElectricalEquipment> ElectricalEquipments { get; set; }

        public DbSet<GlassSweeperBrush> GlassSweeperBrushes { get; set; }

        public DbSet<Instrument> Instruments { get; set; }

        public DbSet<Tire> Tires { get; set; }

        #endregion

        #region Constructors

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
                : base(options)
        {
            Database.EnsureCreated();
        }

        #endregion
    }
}