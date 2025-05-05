using Microsoft.AspNetCore.Mvc;

namespace YourAppNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WordController : ControllerBase
    {
        private static readonly string[] Words = new[]
        {
            "elephant", "hangman", "computer", "javascript", "program"
        };

        private static readonly Random Random = new();

        [HttpGet]
        public IActionResult GetWord()
        {
            string word = Words[Random.Next(Words.Length)];
            return Ok(word);
        }
    }
}
