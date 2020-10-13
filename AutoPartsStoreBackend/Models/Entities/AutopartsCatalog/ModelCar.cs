namespace AutoPartsStoreBackend.Models.Entities.AutopartsCatalog
{
    #region << Using >>

    using System;
    using System.Collections.Generic;

    #endregion

    public class ModelCar
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Model { get; set; }

        public ManufacturerCar ManufacturerCar { get; set; }

        public List<AutoPart> AutoParts { get; set; }

        #endregion

        #region Constructors

        public ModelCar()
        {
            CrDt = DateTime.UtcNow;
            AutoParts = new List<AutoPart>();
        }

        #endregion
    }
}