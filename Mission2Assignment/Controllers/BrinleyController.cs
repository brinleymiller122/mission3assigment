using Microsoft.AspNetCore.Mvc;
using Mission2Assignment.Models;
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

        [HttpGet]
        public IActionResult gradecalc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult gradecalc(gradecalcModel model)
        {
            return View();
        }
    }
}
