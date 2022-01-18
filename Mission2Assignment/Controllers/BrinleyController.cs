using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Controllers
{
    public class BrinleyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult gradecalc()
        {
            return View();
        }
    }
}
