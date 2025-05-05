using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers
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
        public ActionResult<string> Get()
        {
            int index = Random.Next(Words.Length);
            string word = Words[index];
            return Ok(word);
        }
    }
}
