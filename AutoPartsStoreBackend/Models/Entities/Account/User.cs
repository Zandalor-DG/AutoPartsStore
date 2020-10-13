namespace AutoPartsStoreBackend.Models.Entities.Account
{
    #region << Using >>

    using System;

    #endregion

    public class User
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public Role Role { get; set; }

        #endregion

        #region Constructors

        public User()
        {
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}