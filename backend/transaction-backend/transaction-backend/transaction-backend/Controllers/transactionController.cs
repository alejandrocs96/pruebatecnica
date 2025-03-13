using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dto.DTO;
using service.service;

namespace transaction_backend.Controllers;

[ApiController]
[Route("api/transaction")] // Corregido para que coincida con la ruta esperada
public class transactionController : ControllerBase
{
    private readonly ItransactionService _transactionService;

    public transactionController(ItransactionService transactionService)
    {
        _transactionService = transactionService;
    }

    // Envío de transacción
    [HttpPost("generateTransaction")] // Corregido para usar ruta relativa
    [AllowAnonymous]
    [ProducesResponseType(typeof(List<responseDTO<string>>), 200)]
    public async Task<IActionResult> CreateTransaction([FromBody] transactionDTO transactionBody)
    {
        var result = await _transactionService.createTransaction(transactionBody);
        return Ok(result); // Usar Ok() en lugar de JsonResult
    }

    [HttpGet("getAllTransaction/{IdPerson}")]
    [AllowAnonymous]
    [ProducesResponseType(typeof(List<responseDTO<string>>), 200)]
    public async Task<IActionResult> GetTransactions(int IdPerson)
    {
        return Json((await _transactionService.getAllTransactions(IdPerson)));
    }

    [NonAction]
    private JsonResult Json(object? data)
    {
        return new JsonResult(data);

    }
}
