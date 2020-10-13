namespace AutoPartsStoreBackend.Models.Entities.RelatedProducts
{
    #region << Using >>

    using System;

    #endregion

    public class Autochemistry
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        public string Manufacturer { get; set; }

        #endregion

        #region Constructors

        public Autochemistry()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}