using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class WordController : ControllerBase
{
    private static readonly string[] Words = { "elephant", "hangman", "computer", "javascript", "program" };
    private static readonly Random rnd = new Random();

    [HttpGet]
    public string Get()
    {
        int index = rnd.Next(Words.Length);
        return Words[index];
    }
}
