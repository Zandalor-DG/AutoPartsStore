namespace AutoPartsStoreBackend.Models.Entities.RelatedProducts
{
    #region << Using >>

    using System;

    #endregion

    public class ElectricalEquipment
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        public string Manufacturer { get; set; }

        public int Power { get; set; }

        #endregion

        #region Constructors

        public ElectricalEquipment()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}