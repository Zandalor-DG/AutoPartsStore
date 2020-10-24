namespace AutoPartsStoreBackend.Models.Entities.Account
{
    #region << Using >>

    using System;
    using System.Collections.Generic;

    #endregion

    public class Role : IEntityBase
    {
        #region Properties

        public int Id { get; set; }

        public DateTime CrDt { get; private set; }

        public string Name { get; set; }

        public List<User> Users { get; set; }

        #endregion

        #region Constructors

        public Role()
        {
            Users = new List<User>();
            CrDt = DateTime.UtcNow;
        }

        #endregion
    }
}