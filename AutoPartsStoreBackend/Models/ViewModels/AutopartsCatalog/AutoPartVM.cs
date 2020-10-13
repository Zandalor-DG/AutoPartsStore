namespace AutoPartsStoreBackend.Models.ViewModels.AutopartsCatalog
{
    #region << Using >>

    using System;

    #endregion

    public class AutoPartVM
    {
        #region Properties

        public int Id { get; set; }

        public string Name { get; set; }

        public ModelCarVM ModelCarVM { get; set; }

        #endregion

    }
}