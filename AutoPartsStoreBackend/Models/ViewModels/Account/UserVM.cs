namespace AutoPartsStoreBackend.Models.ViewModels.Account
{
    #region << Using >>

    using AutoPartsStoreBackend.Models.Entities.Account;

    #endregion

    public class UserVM
    {
        #region Properties

        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public Role Role { get; set; }

        #endregion
    }
}