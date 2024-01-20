using System.ComponentModel.DataAnnotations;

namespace API.DTOs 
{
    public class RegisterDTO
    {
        [Required]
        public string Email {get; set;}
        [Required]
        [EmailAddress]
        public string Password {get; set;}
        [Required]
        [RegularExpression("(?=.*//d)(?=.*[A-Z])(?=.*[a-z]).{4,8}$", ErrorMessage = "Password must be complex")]
        public string DisplayName {get; set;}
        [Required]
        public string Username {get; set;}
  }
}