"use strict";
/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransferInstruction = exports.transferInstructionDiscriminator = exports.transferStruct = void 0;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
/**
 * @category Instructions
 * @category Transfer
 * @category generated
 */
exports.transferStruct = new beet.BeetArgsStruct([['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]], 'TransferInstructionArgs');
exports.transferInstructionDiscriminator = [
    163, 52, 200, 231, 140, 3, 69, 186,
];
/**
 * Creates a _Transfer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Transfer
 * @category generated
 */
function createTransferInstruction(accounts, programId = new web3.PublicKey('ocp4vWUzA2z2XMYJ3QhM9vWdyoyoQwAFJhRdVTbvo9E')) {
    var _a;
    const [data] = exports.transferStruct.serialize({
        instructionDiscriminator: exports.transferInstructionDiscriminator,
    });
    const keys = [
        {
            pubkey: accounts.policy,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.freezeAuthority,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.mint,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.metadata,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.mintState,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.from,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: accounts.fromAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.to,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.toAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.tokenProgram) !== null && _a !== void 0 ? _a : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.cmtProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.instructions,
            isWritable: false,
            isSigner: false,
        },
    ];
    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    });
    return ix;
}
exports.createTransferInstruction = createTransferInstruction;
