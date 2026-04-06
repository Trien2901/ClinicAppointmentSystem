using Microsoft.AspNetCore.Mvc;
using ClinicAPI.Data;
using ClinicAPI.Models;

namespace ClinicAPI.Controllers
{
    [ApiController]
    [Route("api/appointments")]
    public class AppointmentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppointmentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Create(Appointment ap)
        {
            _context.Appointments.Add(ap);
            _context.SaveChanges();
            return Ok(ap);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Appointments.ToList());
        }
    }
}