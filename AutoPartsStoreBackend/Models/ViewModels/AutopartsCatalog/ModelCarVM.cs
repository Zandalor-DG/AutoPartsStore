namespace AutoPartsStoreBackend.Models.ViewModels.AutopartsCatalog
{
    #region << Using >>

    using System;
    using System.Collections.Generic;

    #endregion

    public class ModelCarVM
    {
        #region Properties

        public int Id { get; set; }

        public string Model { get; set; }

        public List<Entities.AutopartsCatalog.AutoPart> AutoParts { get; set; }

        #endregion

        #region Constructors

        public ModelCarVM()
        {
            AutoParts = new List<Entities.AutopartsCatalog.AutoPart>();
        }

        #endregion
    }
}