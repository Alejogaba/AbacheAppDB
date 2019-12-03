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
    public class CarroController : Controller
    {
        
        private readonly AbacheContext _context;
        public CarroController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarroItem>>> GetCar()
        {
            return await _context.CarroItems.ToListAsync();
        }

        [HttpGet("buscar")]
        public async Task<List<CarroItem>> Buscarproducto(int user,int product)
        {
            var productitem = await _context.CarroItems.Where(p => p.Id_persona == user && p.Id_producto==product).ToListAsync();
          
            return productitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<CarroItem>> PostCar(CarroItem carroitem)
        {
            _context.CarroItems.Add(carroitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCar), new {id = carroitem.Id_carro}, carroitem);
        }

     
        }
   
}