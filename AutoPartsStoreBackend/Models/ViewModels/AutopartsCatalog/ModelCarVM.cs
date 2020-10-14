﻿namespace AutoPartsStoreBackend.Models.ViewModels.AutopartsCatalog
{
    #region << Using >>

    using System.Collections.Generic;

    #endregion

    public class ModelCarVM
    {
        #region Properties

        public int Id { get; set; }

        public string Model { get; set; }

        public string Manufacturer { get; set; }

        public int ManufacturerId { get; set; }

        public List<AutoPartVM> AutoParts { get; set; }

        #endregion

        #region Constructors

        public ModelCarVM()
        {
            AutoParts = new List<AutoPartVM>();
        }

        #endregion
    }
}