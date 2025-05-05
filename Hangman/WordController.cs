using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class WordController : ControllerBase
{
    private static readonly string[] Words = 
    {
        "elephant", "hangman", "computer", "javascript", "program"
    };

    private static readonly Random Random = new();

    [HttpGet]
    public string Get()
    {
        int index = Random.Next(Words.Length);
        return Words[index];
    }
}
