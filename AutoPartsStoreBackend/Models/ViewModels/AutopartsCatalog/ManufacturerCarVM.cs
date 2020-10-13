namespace AutoPartsStoreBackend.Models.ViewModels.AutopartsCatalog
{
    #region << Using >>

    using System;
    using System.Collections.Generic;

    #endregion

    public class ManufacturerCarVM
    {
        #region Properties

        public int Id { get; set; }

        public string Manufacturer { get; set; }

        public List<ModelCarVM> ModelCarsVM { get; set; }

        #endregion

        #region Constructors

        public ManufacturerCarVM()
        {
            ModelCarsVM = new List<ModelCarVM>();
        }

        #endregion
    }
}