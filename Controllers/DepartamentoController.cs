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
    public class DepartamentoController : Controller
    {
        
        private readonly AbacheContext _context;
        public DepartamentoController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DepartamentoItem>>> GetPersona()
        {
            return await _context.DepartamentoItems.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<DepartamentoItem>> GetPersona(int id)
        {
            var categoriaitem = await _context.DepartamentoItems.FindAsync(id);
            if (categoriaitem==null)
            {
                return NotFound();
            }
            return categoriaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<DepartamentoItem>> PostPersona(DepartamentoItem departamentoitem)
        {
            _context.DepartamentoItems.Add(departamentoitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = departamentoitem.Id_departamento }, departamentoitem);
        }

     
        }
   
}