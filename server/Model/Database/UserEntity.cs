using Microsoft.AspNetCore.Identity;


public class UserEntity : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public long? FacebookId { get; set; }
    public string PictureUrl { get; set; }
}