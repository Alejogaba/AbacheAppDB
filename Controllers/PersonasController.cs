using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskSharpHTTP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonasController : Controller
    {
        
        private readonly AbacheContext _context;
        public PersonasController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonaItem>>> GetPersona()
        {
            return await _context.PersonaItems.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonaItem>> GetPersona(int id)
        {
            var personaitem = await _context.PersonaItems.FindAsync(id);
            if (personaitem==null)
            {
                return NotFound();
            }
            return personaitem;
        }
        [HttpGet("autenticar")]
        public async Task<ActionResult<PersonaItem>> Login(string email,string password)
        {
            var personaitem = await _context.PersonaItems.Where(p => p.Email == email && p.Password==password).FirstOrDefaultAsync();
          if (personaitem==null)
            {
                return NotFound();
            }
            return personaitem;
        }
        
        [HttpPost]
        public async Task<ActionResult<PersonaItem>> PostPersona(PersonaItem personaitem)
        {
            _context.PersonaItems.Add(personaitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = personaitem.Id_persona }, personaitem);
        }

     
        }
   
}