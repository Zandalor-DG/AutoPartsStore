namespace AutoPartsStoreBackend.Models.ViewModels.AutopartsCatalog
{
    #region << Using >>

    #endregion

    public class AutoPartVM
    {
        #region Properties

        public int Id { get; set; }

        public string Name { get; set; }

        public string Model { get; set; }

        public int ModelCarId { get; set; }

        #endregion
    }
}