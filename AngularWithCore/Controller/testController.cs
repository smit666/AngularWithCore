using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularWithCore.Controllers
{
    [Route("api/[Controller]")]
    public class testController : Controller
    {
        [HttpGet("/api/values")]
        public IEnumerable<string> Get()
        {
            return new string[] { "a", "b", "c", "d" };
        }
    }
}