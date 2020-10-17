namespace AutoPartsStoreBackend.Models.Entities.AutopartsCatalog
{
    #region << Using >>

    using System;

    #endregion

    public class AutoPart : IEntityBase
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        public ModelCar ModelCar { get; set; }

        #endregion

        #region Constructors

        public AutoPart()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}