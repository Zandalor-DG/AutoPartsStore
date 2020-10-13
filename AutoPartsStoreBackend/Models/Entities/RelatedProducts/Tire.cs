namespace AutoPartsStoreBackend.Models.Entities.RelatedProducts
{
    #region << Using >>

    using System;

    #endregion

    public class Tire
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        #endregion

        #region Constructors

        public Tire()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}