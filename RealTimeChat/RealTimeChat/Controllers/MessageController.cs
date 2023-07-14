using Microsoft.AspNetCore.Mvc;

namespace RealTimeChat.Controllers
{
    public class MessageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
