using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace Expenses.Core.Utilities
{
    public static class JWTGenerator
    {
        public static string GenerateUserToken(string username)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, username)
            };

            return GenerateToken(claims, DateTime.UtcNow.AddHours(2));
        }

        private static string GenerateToken(Claim[] claims, DateTime expiresIn)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var jwtSecret = Environment.GetEnvironmentVariable("JWT_SECRET");
            var issuer = Environment.GetEnvironmentVariable("JWT_ISSUER");

            var SecretKey = Encoding.ASCII.GetBytes(jwtSecret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = expiresIn,
                Issuer = issuer,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(SecretKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
