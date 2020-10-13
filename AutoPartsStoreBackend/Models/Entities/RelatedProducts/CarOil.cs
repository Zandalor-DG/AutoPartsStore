namespace AutoPartsStoreBackend.Models.Entities.RelatedProducts
{
    #region << Using >>

    using System;

    #endregion

    public class CarOil
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        public string Manufacturer { get; set; }

        public string OilViscosity { get; set; }

        #endregion

        #region Constructors

        public CarOil()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}