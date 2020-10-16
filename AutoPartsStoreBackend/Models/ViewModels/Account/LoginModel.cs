namespace AutoPartsStoreBackend.Models.ViewModels.Account
{
    #region << Using >>

    using System.ComponentModel.DataAnnotations;

    #endregion

    public class LoginModel
    {
        #region Properties

        [Required(ErrorMessage = "Не указан Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Не указан пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        #endregion
    }
}