namespace AutoPartsStoreBackend.Models.Entities.RelatedProducts
{
    #region << Using >>

    using System;

    #endregion

    public class Instrument : IEntityBase
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        public string Manufacturer { get; set; }

        #endregion

        #region Constructors

        public Instrument()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}