namespace AutoPartsStoreBackend.Models.Entities.AutopartsCatalog
{
    #region << Using >>

    using System;
    using System.Collections.Generic;

    #endregion

    public class ManufacturerCar
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Manufacturer { get; set; }

        public List<ModelCar> ModelCars { get; set; }

        #endregion

        #region Constructors

        public ManufacturerCar()
        {
            CrDt = DateTime.UtcNow;
            ModelCars = new List<ModelCar>();
        }

        #endregion
    }
}