using System.Collections.Generic;
using System.Security.Claims;
using Application.Interfaces;
using Domain;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Infrastructure.Security
{
    public class JwtGenerator : IJwtGenerator
    {
        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            // generate signing credentials
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("super secrete key"));
            var creds = new SigningCredentials(key, SecurityAlgorithms. HmacSha512Signature);

            var tokenDesriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            var tokenHandler =  new JwtSecuritytokenHandler();

            var token = tokenHandler.CreateToken(tokenDesriptor);

            return tokenHandler.WriteToken(token)
        }
    }
}