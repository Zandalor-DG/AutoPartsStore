namespace AutoPartsStoreBackend.Models.Entities.RelatedProducts
{
    #region << Using >>

    using System;

    #endregion

    public class GlassSweeperBrush
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Manufacturer { get; set; }

        public string Length  { get; set; }

        public string Type { get; set; }

        #endregion

        #region Constructors

        public GlassSweeperBrush()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}